package com.ssm.service;

import com.ssm.pojo.User;

public interface UserService {
	public User getUserById(int userId);

	public User getUser(User user);

	public void register(User u);
}
