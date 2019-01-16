package com.uclee.fundation.data.mybatis.model;

import java.math.BigDecimal;

public class Orders {
	private Integer id;

    private String danhao;

    private String orderSerialNum;
    
    private Integer ordersId;
    
    private String names;
    
    private String guige;
    
    private String bianhao;
    
    private Integer shuliang;
    
    private String bumen;
    
    private String hsCode;
    
    private String storeName;
    
    private BigDecimal danjia;
    
    private String songhuo;

	private String riqi;
	
	private BigDecimal jine;
	
	private BigDecimal huijine;

	private String merchantOrderNumber;

	public String getMerchantOrderNumber() {
		return merchantOrderNumber;
	}

	public void setMerchantOrderNumber(String merchantOrderNumber) {
		this.merchantOrderNumber = merchantOrderNumber;
	}

	public BigDecimal getHuijine() {
		return huijine;
	}

	public void setHuijine(BigDecimal huijine) {
		this.huijine = huijine;
	}

	public String getSonghuo() {
		return songhuo;
	}

	public void setSonghuo(String songhuo) {
		this.songhuo = songhuo;
	}

	public BigDecimal getDanjia() {
		return danjia;
	}

	public void setDanjia(BigDecimal danjia) {
		this.danjia = danjia;
	}

	
	public String getBumen() {
		return bumen;
	}

	public void setBumen(String bumen) {
		this.bumen = bumen;
	}

	public String getHsCode() {
		return hsCode;
	}

	public void setHsCode(String hsCode) {
		this.hsCode = hsCode;
	}

	public String getStoreName() {
		return storeName;
	}

	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}

	public Integer getShuliang() {
		return shuliang;
	}

	public void setShuliang(Integer shuliang) {
		this.shuliang = shuliang;
	}

	public String getRiqi() {
		return riqi;
	}

	public void setRiqi(String riqi) {
		this.riqi = riqi;
	}

	public BigDecimal getJine() {
		return jine;
	}

	public void setJine(BigDecimal jine) {
		this.jine = jine;
	}


	public String getBianhao() {
		return bianhao;
	}

	public void setBianhao(String bianhao) {
		this.bianhao = bianhao;
	}

	public String getNames() {
		return names;
	}

	public void setNames(String names) {
		this.names = names;
	}

	public String getGuige() {
		return guige;
	}

	public void setGuige(String guige) {
		this.guige = guige;
	}

	public String getBeizhu() {
		return beizhu;
	}

	public void setBeizhu(String beizhu) {
		this.beizhu = beizhu;
	}

	private String beizhu;

	public Integer getOrdersId() {
		return ordersId;
	}

	public void setOrdersId(Integer ordersId) {
		this.ordersId = ordersId;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDanhao() {
		return danhao;
	}

	public void setDanhao(String danhao) {
		this.danhao = danhao;
	}

	public String getOrderSerialNum() {
		return orderSerialNum;
	}

	public void setOrderSerialNum(String orderSerialNum) {
		this.orderSerialNum = orderSerialNum;
	}

}
