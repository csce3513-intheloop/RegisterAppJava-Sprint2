package edu.uark.registerapp.controllers;

import java.util.ArrayList;
import java.util.Map;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import edu.uark.registerapp.commands.products.ProductByPartialLookupCodeQuery;
import edu.uark.registerapp.controllers.enums.ViewModelNames;
import edu.uark.registerapp.controllers.enums.ViewNames;
import edu.uark.registerapp.models.api.Product;
import edu.uark.registerapp.models.entities.ActiveUserEntity;

@Controller
@RequestMapping(value = "/transaction")
public class TransactionController extends BaseRouteController {
	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView showTransaction(
		@RequestParam final Map<String, String> queryParameters,
		final HttpServletRequest request
	) {		
		final Optional<ActiveUserEntity> activeUserEntity =
			this.getCurrentUser(request);
		if (!activeUserEntity.isPresent()) {
			return buildInvalidSessionResponse();
		}

		ModelAndView modelAndView =
			this.setErrorMessageFromQueryString(
				new ModelAndView(ViewNames.TRANSACTION.getViewName()),
				queryParameters);
		//modelAndView.addObject("returnList", arrayList);
		return modelAndView;
	}

// @RequestMapping(value = "/{lookupCode}", method = RequestMethod.POST)
// public ModelAndView startWithLookupCode(
// 	@PathVariable ("lookupCode") String lookupCode,
// 	@RequestParam final Map<String, String> queryParameters,
// 	final HttpServletRequest request){

// 		System.out.println("entered second function");
// 		System.out.println("entered second function");
// 		System.out.println("entered second function");

// 	ModelAndView modelAndView =
// 	this.setErrorMessageFromQueryString(
// 		new ModelAndView(ViewNames.TRANSACTION.getViewName()),
// 		queryParameters);


// 	//String lookupcodeIn = request.getParameter("lookupCode");
// 	for (Product product : this.productByPartialLookupCodeQuery.setPartialLookupCode(lookupCode).execute()){
// 		System.out.println("Code: " + product.getLookupCode());			
// 		}
// 	modelAndView.addObject("lookupCode", lookupCode);
		
// 	return modelAndView;
// }


}
