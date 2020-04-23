package edu.uark.registerapp.models.api;

import java.util.UUID;

import org.apache.commons.lang3.StringUtils;

import edu.uark.registerapp.models.entities.TransactionEntity;
import edu.uark.registerapp.models.entities.TransactionEntryEntity;
import edu.uark.registerapp.models.entities.ProductEntity;

public class Transaction extends ApiResponse {
    private UUID id;
	public UUID getId() {
		return this.id;
    } 
    public Transaction setId(final UUID id) {
		this.id = id;
		return this;
	}

	private String productName;
	public String getProductName(){
		return this.productName;
	}
	public Transaction setProductName(final String productName){
		this.productName = productName;
		return this;
	}

	private double productQuantity;
	public double getProductQuantity(){
		return this.productQuantity;
	}
	public Transaction setProductQuantity(final double productQuantity){
		this.productQuantity = productQuantity;
		return this;
	}

	private long productPrice;
	public long getProductPrice(){
		return this.productPrice;
	}
	public Transaction setProductPrice(final long productPrice){
		this.productPrice = productPrice;
		return this;
	}

	private long totalPrice; 
	public long gettTotalPrice(){
		return this.totalPrice;
	}
	public Transaction setTotalPrice(final long totalPrice){
		this.totalPrice = totalPrice;
		return this;
	}
	
	private double totalCount; 
	public double getTotalCount(){
		return this.totalCount;
	}
	public double setTotalCount(){
		this.totalCount = this.totalCount + this.productQuantity;
		return this.totalCount; 
	}
	
	public Transaction(){
		super();
		this.id = new UUID(0, 0);
		this.productName = StringUtils.EMPTY;
		this.productPrice = 0;
		this.productQuantity = 0;
		this.totalPrice = 0;
		this.totalCount = 0; 

	}
	public Transaction(final TransactionEntity transactionEntity, final TransactionEntryEntity transactionEntryEntity, final ProductEntity productEntity){
		super(false);
		this.id = transactionEntity.getId();
		this.productName = productEntity.getLookupCode();
		this.productPrice = transactionEntryEntity.getPrice();
		this.productQuantity =transactionEntryEntity.getQuantity();
		this.totalPrice = transactionEntity.getTotal();
		this.totalCount = setTotalCount(); 
	}
}
