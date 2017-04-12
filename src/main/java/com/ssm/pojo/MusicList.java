package com.ssm.pojo;

public class MusicList {
	/**
	 * 歌单主键
	 */
	private Integer id;
	/**
	 * 歌单名称
	 */
	private String listName;
	/**\
	 * 歌单创建者ID
	 */
	private Integer creatorId;
	/**
	 * 歌单收藏数量
	 */
	private Integer storeNum;
	/**
	 * 歌单内歌曲数量
	 */
	private Integer musicNum;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getListName() {
		return listName;
	}
	public void setListName(String listName) {
		this.listName = listName;
	}
	public Integer getCreatorId() {
		return creatorId;
	}
	public void setCreatorId(Integer creatorId) {
		this.creatorId = creatorId;
	}
	public Integer getStoreNum() {
		return storeNum;
	}
	public void setStoreNum(Integer storeNum) {
		this.storeNum = storeNum;
	}
	public Integer getMusicNum() {
		return musicNum;
	}
	public void setMusicNum(Integer musicNum) {
		this.musicNum = musicNum;
	}
	
	
}
