package com.ssm.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.ssm.pojo.Music;
import com.ssm.pojo.MusicList;
import com.ssm.pojo.MusicRList;
import com.ssm.pojo.User;
import com.ssm.service.MusicListService;
import com.ssm.service.MusicRListService;
import com.ssm.service.MusicService;

@Controller
@RequestMapping("/index")				
public class IndexController {
	@Autowired
	MusicService musicService;
	
	@Autowired
	MusicListService musicListService;
	
	@Autowired
	MusicRListService musicRListService;
	
	@RequestMapping(value="")
	public ModelAndView index(){
		return new ModelAndView("cloud","user",new User());
	}
	
	@RequestMapping(value="/getRank/{type}")
	@ResponseBody
	public List<Music> getRank(@PathVariable("type") int type){
		return musicService.getRank(type);
	}
	
	@RequestMapping(value="/getMInfo/{id}")
	@ResponseBody
	public Music getMSrc(@PathVariable("id") int id){
		return musicService.getMInfo(id);
	}
	
	@RequestMapping(value="/getLists")
	@ResponseBody
	public List<MusicList> getLists(int creatorId){
		return musicListService.getListsByCreatorId(creatorId);
	}
	
	@RequestMapping(value="/addMusicToList")
	@ResponseBody
	public String addMusicToList(int musicId,int musicListId){
		MusicRList musicRList = new MusicRList();
		musicRList.setListId(musicListId);
		musicRList.setMusicId(musicId);
		MusicRList mrl = musicRListService.getMusicRList(musicRList);
		if(mrl!=null){
			return "歌曲已存在";
		}
		musicRListService.addMusicToList(musicRList);
		musicListService.updateMusicNum(musicListId);
		return "添加成功";
	}
	
	@RequestMapping(value="/addMusicList")
	@ResponseBody
	public int addMusicList(String listName,int creatorId){
		MusicList musicList = new MusicList();
		musicList.setListName(listName);
		musicList.setCreatorId(creatorId);
		musicList.setStoreNum(1);
		musicList.setMusicNum(0);
		musicListService.addMusicList(musicList);
		
		return musicList.getId();
	}
	
	@RequestMapping(value="/download")
	@ResponseBody
	public void download(HttpServletRequest request,HttpServletResponse response,String src){
		//获取网站部署路径(通过ServletContext对象)，用于确定下载文件位置，从而实现下载

        //1.设置文件ContentType类型，这样设置，会自动判断下载文件类型
        response.setContentType("multipart/form-data");
        //2.设置文件头：最后一个参数是设置下载文件名(假如我们叫a.pdf)
        response.setHeader("Content-Disposition", "attachment;fileName="+src);
        ServletOutputStream out;
        //通过文件路径获得File对象(假如此路径中有一个download.pdf文件)
        String path=request.getSession().getServletContext().getRealPath("");
        File file = new File(path +"/"+src);
        try {
            FileInputStream in = new FileInputStream(file);

            //3.通过response获取ServletOutputStream对象(out)
            out = response.getOutputStream();

            int b = 0;
            byte[] buffer = new byte[512];
            int len = 0;
            //循环将输入流中的内容读取到缓冲区当中
            while((len=in.read(buffer))>0){
                //输出缓冲区的内容到浏览器，实现文件下载
                out.write(buffer, 0, len);
            }
            //关闭文件输入流
            in.close();
            //关闭输出流
            out.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
		
	}
	
}
