package edu.uark.registerapp.commands.transactions;

import java.util.UUID;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.uark.registerapp.commands.VoidCommandInterface;
import edu.uark.registerapp.commands.exceptions.NotFoundException;
import edu.uark.registerapp.models.repositories.TransactionEntryRepository;
import edu.uark.registerapp.models.entities.TransactionEntryEntity;

@Service
public class TransactionDeleteCommand implements VoidCommandInterface {

    @Transactional
    @Override
    public void execute(){
        final Optional<TransactionEntryEntity> transactionEntryEntity =
            this.transactionEntryRepository.findByTransactionIdAndProductId(this.transactionId, this.productId);
            
		if (!transactionEntryEntity.isPresent()) {
			throw new NotFoundException("Transaction");
		}

		this.transactionEntryRepository.delete(transactionEntryEntity.get());

    }

    private UUID productId;
    private UUID transactionId;

    public UUID getProductId(){
        return this.productId;
    }

    public UUID getTransactionId(){
        return this.transactionId;
    }

    public TransactionDeleteCommand setProductId(final UUID productId) {
        this.productId = productId;
        return this;
    }
    public TransactionDeleteCommand setTransactionId(final UUID transactionId){
		this.transactionId = transactionId;
		return this;
	}

    @Autowired
    TransactionEntryRepository transactionEntryRepository;
}