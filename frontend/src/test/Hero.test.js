import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

//Test suite

describe("Hero Component", () => {
   test("renders Hero image", () =>{    
    render(<Hero />);
    //3 things are being checked here 1. its attribute(alt image) 2.its document 3.and attribute check
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/homeHero.png");
   }); 

    test("renders Signup button", () =>{    
    render(<Hero />);
    const signupButton = screen.getByRole("button", { name: /Signup now/i});
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
    });

});
