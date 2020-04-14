package edu.uark.registerapp.controllers;

import java.util.ArrayList;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.uark.registerapp.commands.products.ProductByPartialLookupCodeQuery;
import edu.uark.registerapp.models.api.Product;

@RestController

@RequestMapping(value = "/api/transaction")
public class TransactionRestController extends BaseRestController {

	@RequestMapping( method = RequestMethod.GET)
	public ArrayList<String> getpartialLookupCode(
		@RequestParam final Map<String, String> queryParameters,
        //@RequestBody final Product product,
		final HttpServletRequest request,
		final HttpServletResponse response
	) {
        //System.out.println("lookupcode: " );
        ArrayList<String> arrayList = new ArrayList<>(); 
        //String lookupcode = product.getLookupCode();
		//String lookupcode = request.getParameter("lookupCode");
		if (queryParameters.get("lookupCode") != null){
			//System.out.println("lookupcode: " + lookupcode);
			for (Product product : this.productByPartialLookupCodeQuery.setPartialLookupCode(queryParameters.get("lookupCode")).execute()){
				arrayList.add(product.getLookupCode());
				//System.out.println("lookupcode: " + product.getLookupCode());
			} 
			
			for (int i=0; i < arrayList.size(); i++ ){
			 	System.out.println("List" +i+ ":  " + arrayList.get(i));
            }
        }
        return arrayList;
	}

	// Properties
	@Autowired
    private ProductByPartialLookupCodeQuery productByPartialLookupCodeQuery;
}
