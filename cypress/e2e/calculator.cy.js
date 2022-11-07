/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example to-do app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000")
  })

  it("add two integers", () => {
    cy.get("#first").type("3")
    cy.get("#second").type("9")
    cy.get("#operation").select("add").should("have.value", "add")
    cy.get("button").click()
    cy.get("#result").should("have.text", "12")
  })
  it("subtract two integers", () => {
    cy.get("#first").type("3")
    cy.get("#second").type("9")
    cy.get("#operation").select("subtract")
    cy.get("button").click()
    cy.get("#result").should("have.text", "-6")
  })
  it("multiply two integers", () => {
    cy.get("#first").type("3")
    cy.get("#second").type("9")
    cy.get("#operation").select("multiply")
    cy.get("button").click()
    cy.get("#result").should("have.text", "27")
  })
  it("divide two integers", () => {
    cy.get("#first").type("9")
    cy.get("#second").type("3")
    cy.get("#operation").select("divide")
    cy.get("button").click()
    cy.get("#result").should("have.text", "3")
  })
})
