//Visit the Bank of Kigali website

describe ('1. Homepage', function() {
	it("Visits Bank of Kigali Website", function() {
		cy.visit('http://bk.rw')
	})
})

//Checking whether the four sections are showing
/describe ('check for items', function() {
 	it("Checks for the four items in homepage", function() {
 		cy.contains("Open account")
 		cy.contains("Get a loan")
 		cy.contains("Get a Mortgage")
 		cy.contains("Card Center")
 	})
})

//Checking and testing the Links under Open Account
//Personal Current
describe ('Check Personal Current', function() {
	it("Link is present and working", function() {
		cy.get('div.serviceBox > ul > li:nth-child(1) > a')
		.should('have.attr', 'href')
		.then((href) => {
			cy.visit(href)
			.url().should('include','/personal-current')
		  })
     })
})

//Back to homepage
describe ('Homepage', function() {
	it("Visits Bank of Kigali Website", function() {
		cy.visit('http://bk.rw')
	})
})

//Joint Account
describe ('Check Joint Account', function() {
	it("Link is present and working", function() {
		cy.get('div.serviceBox > ul > li:nth-child(2) > a')
		.should('have.attr', 'href')
		.then((href) => {
			cy.visit(href)
			.url().should('include','/joint-current')
		})
	})
})

//Back to homepage
describe ('Homepage', function() {
	it("Visits Bank of Kigali Website", function() {
		cy.visit('http://bk.rw')
	})
})

//Special Savings
describe ('Check Special Savings', function(){
	it("Link is present and working",function(){
		cy.get('div.serviceBox > ul > li:nth-child(3) > a')
		.should('have.attr', 'href')
		.then((href) => {
			cy.visit(href)
			.url().should('include','/special-saving')
		})
	})
})

//Back to homepage
describe ('Homepage', function() {
	it("Visits Bank of Kigali Website", function() {
		cy.visit('http://bk.rw')
	})
})

//Fixed Savings
describe ('Check Fixed Savings', function(){
	it("Link is present and working",function(){
		cy.get('div.serviceBox > ul > li:nth-child(4) > a')
		.should('have.attr', 'href')
		.then((href) => {
			cy.visit(href)
			.url().should('include','/fixed-saving')
		})
	})
})

//Back to homepage
describe ('Homepage', function() {
	it("Visits Bank of Kigali Website", function() {
		cy.visit('http://bk.rw')
	})
})

//Cash Extra Saving
describe ('Check Cash Extra Saving', function(){
	it("Link is present and working",function(){
		cy.get('div.serviceBox > ul > li:nth-child(5) > a')
		.should('have.attr', 'href')
		.then((href) => {
			cy.visit(href)
			.url().should('include','/cash-extra-saving')
		})
	})
})

//Back to homepage
describe ('Homepage', function() {
	it("Visits Bank of Kigali Website", function() {
		cy.visit('http://bk.rw')
	})
})

//Student Saving
describe ('Check Student Saving', function(){
	it("Link is present and working",function(){
		cy.get('div.serviceBox > ul > li:nth-child(6) > a')
		.should('have.attr', 'href')
		.then((href) => {
			cy.visit(href)
			.url().should('include','/student-saving-account')
		})
	})
})

//Back to homepage
describe ('Homepage', function() {
	it("Visits Bank of Kigali Website", function() {
		cy.visit('http://bk.rw')
	})
})

//Student Saving
describe ('Check Kira Kibondo', function(){
	it("Link is present and working",function(){
		cy.get('div.serviceBox > ul > li:nth-child(7) > a')
		.should('have.attr', 'href')
		.then((href) => {
			cy.visit(href)
			.url().should('include','/kira-kibondo')
		})
	})
})

//Back to homepage
describe ('Homepage', function() {
	it("Visits Bank of Kigali Website", function() {
		cy.visit('http://bk.rw')
	})
})


//USD Rate
describe ('Checking the USD Rate', function() {
	it("Checks where rate is at least 800",function() {
		// cy.get('tbody > :nth-child(2) > :nth-child(2)').then(('tbody > :nth-child(2) > :nth-child(2)')) 
		// cy.get('tbody > :nth-child(2) > :nth-child(2) > td')
		// const buy = parseFloat(cy.get('tbody > :nth-child(2) > :nth-child(2)').debug())
		// const sell = parseFloat(cy.get('tbody > :nth-child(2) > :nth-child(3)').debug())

		// cy.get('.col-lg-4 > .linkscol').find('tr').should(($listOfElements) => {
			parseFloat(cy.get('tbody > :nth-child(2) > :nth-child(2)'),10)
			parseFloat(cy.get('tbody > :nth-child(2) > :nth-child(3)'),10)
		// 	expect($listOfElements).to.have.length(4)
		// 	expect(sell).to.be.greaterThan(buy)
		//})
		})
	})
	// })

//Navigation Menu
describe ('2. Navigation Menu', function() {
	it("Click on Current & Savings", function(){
		//Get child element ID and force dispay to true. Clicks and Opens Menu under Current & Savings and Visit Online Banking Page
		cy.get('.original > #nav > .container > div.row > .navbar-collapse > :nth-child(1) > [tabindex="12"] > .dropdown-toggle').invoke('show').click({ force: true })
		cy.contains("Account Services")
		cy.contains("Online Banking")
		.should('have.attr', 'href')
		.then((href) => {
			cy.visit(href)
			.url().should('include','/online-banking')
		})
	})
})


//Online Banking Page
describe ('Online Banking Page', function() {
	it("Check for Apply Now", function(){
		cy.visit('http://bk.rw')
		//Checks for Apply now Button in the Online Banking Page
		cy.get('.original > #nav > .container > div.row > .navbar-collapse > :nth-child(1) > [tabindex="12"] > .dropdown-toggle').invoke('show').click({ force: true })
		cy.contains("Account Services")
		cy.contains("Online Banking")
		.should('have.attr', 'href')
		.then((href) => {
			cy.visit(href)
			.url().should('include','/online-banking')
			cy.get(':nth-child(2) > .pb-access-box > :nth-child(4) > .btn')
			.contains('Apply Now')
		})
	})
})

//Back to homepage
describe ('Homepage', function() {
	it("Visits Bank of Kigali Website", function() {
		cy.visit('http://bk.rw')
	})
})
