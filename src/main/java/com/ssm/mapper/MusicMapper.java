package com.ssm.mapper;

import java.util.List;

import com.ssm.pojo.Music;

public interface MusicMapper {

	public List<Music> getRank(int type);

	public Music getMInfo(int id);

}
