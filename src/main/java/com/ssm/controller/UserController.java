	package com.ssm.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ssm.pojo.User;
import com.ssm.service.UserService;
@Controller
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;
	@RequestMapping("index")
	public String getIndex(HttpServletRequest request,Model model){
		int userId = Integer.parseInt(request.getParameter("id"));
		User user = userService.getUserById(userId);
		model.addAttribute("username", user.getUsername());
		return "index";
	}
	@RequestMapping(value="login")
	@ResponseBody
	public String login(String email,String password){
		User u = new User();
		u.setEmail(email);
		User user = userService.getUser(u);
		System.out.println(password);
		if(user!=null&&user.getPassword().equals(password)){
			return user.getId().toString();
		}else{
			return "用户不存在或密码错误！";
		}
		
	}
	@RequestMapping(value="register")
	@ResponseBody
	public String register(String username,String email,String password,String repwd,int gender){
		User u = new User();
		u.setEmail(email);
		User user = userService.getUser(u);
		System.out.println(password);
		if(user==null){
			if(password.equals(repwd)){
				u.setUsername(username);
				u.setPassword(password);
				u.setGender(gender);
				u.setStatus(1);
				userService.register(u);
				user = new User();
				user.setEmail(email);
				user = userService.getUser(user);
				return user.getId().toString();
			}else{
				return "两次输入的密码不一致！";
			}
		}else{
			return "该邮箱已注册！";
		}
		
	}
	
	@RequestMapping(value="getUser")
	@ResponseBody
	public String login(Integer id){
		User u = new User();
		u.setId(id);
		User user = userService.getUser(u);
		return user.getUsername();
		
	}
}
