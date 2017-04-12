package com.ssm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssm.mapper.MusicRListMapper;
import com.ssm.pojo.MusicRList;
@Service
public class MusicRListServiceImpl implements MusicRListService{

	@Autowired
	MusicRListMapper musicRListMapper;
	
	@Override
	public void addMusicToList(MusicRList musicRList) {
		 musicRListMapper.addMusicToList( musicRList);
	}

	@Override
	public MusicRList getMusicRList(MusicRList musicRList) {
		return musicRListMapper.getMusicRList(musicRList);
	}

}
