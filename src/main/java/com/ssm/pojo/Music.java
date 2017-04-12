package com.ssm.pojo;

import java.util.Date;

public class Music {
	private Integer musicId;  // 音乐id
	private String name;  // 音乐名
	private Integer singerId;	//歌手ID
	private String singerName;	//歌手名称
	private String type;  //音乐类型
	private String src;  // 音乐资源链接
	private Date uploadTime;	//上传时间
	private Integer uploader;		//上传用户的ID
	private Integer playNum;  // 播放的次数
	private String lyric;  // 音乐类型
	public Integer getMusicId() {
		return musicId;
	}
	public void setMusicId(Integer musicId) {
		this.musicId = musicId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getSingerId() {
		return singerId;
	}
	public void setSingerId(Integer singerId) {
		this.singerId = singerId;
	}
	public String getSingerName() {
		return singerName;
	}
	public void setSingerName(String singerName) {
		this.singerName = singerName;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getSrc() {
		return src;
	}
	public void setSrc(String src) {
		this.src = src;
	}
	public Date getUploadTime() {
		return uploadTime;
	}
	public void setUploadTime(Date uploadTime) {
		this.uploadTime = uploadTime;
	}
	public Integer getUploader() {
		return uploader;
	}
	public void setUploader(Integer uploader) {
		this.uploader = uploader;
	}
	public Integer getPlayNum() {
		return playNum;
	}
	public void setPlayNum(Integer playNum) {
		this.playNum = playNum;
	}
	public String getLyric() {
		return lyric;
	}
	public void setLyric(String lyric) {
		this.lyric = lyric;
	}
	
}
