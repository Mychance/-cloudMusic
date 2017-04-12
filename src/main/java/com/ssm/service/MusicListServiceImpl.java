package com.ssm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssm.mapper.MusicListMapper;
import com.ssm.pojo.MusicList;
@Service
public class MusicListServiceImpl implements MusicListService{

	@Autowired
	MusicListMapper musicListMapper;
	
	@Override
	public List<MusicList> getListsByCreatorId(int creatorId) {
		return musicListMapper.getListsByCreatorId(creatorId);
	}

	@Override
	public void addMusicList(MusicList musicList) {
		musicListMapper.addMusicList(musicList);
		
	}

	@Override
	public void updateMusicNum(int musicListId) {
		musicListMapper.updateMusicNum(musicListId);
	}



}
