package edu.uark.registerapp.models.api;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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
}