package com.ssm.mapper;

import java.util.List;

import com.ssm.pojo.MusicList;

public interface MusicListMapper {
	public List<MusicList> getListsByCreatorId(int creatorId);

	public void addMusicList(MusicList musicList);

	public void updateMusicNum(int musicListId);

}
