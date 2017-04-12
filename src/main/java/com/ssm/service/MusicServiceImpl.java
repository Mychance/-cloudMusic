package com.ssm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssm.mapper.MusicMapper;
import com.ssm.pojo.Music;
@Service
public class MusicServiceImpl implements MusicService{
	@Autowired
	MusicMapper musicMapper;

	@Override
	public List<Music> getRank(int type) {
		return musicMapper.getRank(type);
	}

	@Override
	public Music getMInfo(int id) {
		return musicMapper.getMInfo(id);
	}

}
