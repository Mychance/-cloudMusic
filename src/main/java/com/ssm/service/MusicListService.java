package com.ssm.service;

import java.util.List;

import com.ssm.pojo.MusicList;

public interface MusicListService {
	public List<MusicList> getListsByCreatorId(int creatorId);

	public void addMusicList(MusicList musicList);

	public void updateMusicNum(int musicListId);

}
