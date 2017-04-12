package com.ssm.mapper;

import com.ssm.pojo.User;

public interface UserMapper {

	public User getUserById(int id);

	public User getUser(User user);

	public void register(User user);

}
