package com.ssm.service;

import java.util.List;

import com.ssm.pojo.Music;

public interface MusicService {

	public List<Music> getRank(int type);

	public Music getMInfo(int id);

}
