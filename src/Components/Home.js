import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description = "Order Online for Touchless Delivery"
                backgroundImg = "model-s.jpg"
                lefBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section
                title="Model 3"
                description = "Order Online for Touchless Delivery"
                backgroundImg = "model-3.jpg"
                lefBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section
                title="Model x"
                description = "Order Online for Touchless Delivery"
                backgroundImg = "model-x.jpg"
                lefBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section
                title="Model y"
                description = "Order Online for Touchless Delivery"
                backgroundImg = "model-y.jpg"
                lefBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panel"
                description = "Money-Back gaurantee"
                backgroundImg = "solar-panel.jpg"
                lefBtnText = "Order Now"
                rightBtnText = "learn more"
            />
            <Section
                title="Solar for new roofs"
                description = "Solar roofs costs less"
                backgroundImg = "solar-roof.jpg"
                lefBtnText = "Order Now"
                rightBtnText = "learn more"
            />
            <Section
                title="Accessories"
                description = ""
                backgroundImg = "accessories.jpg"
                lefBtnText = "Order Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
`
