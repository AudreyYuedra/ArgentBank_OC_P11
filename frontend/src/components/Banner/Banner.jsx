import img_banner from "../../assets/images/bank-tree.jpeg"
import styled from "styled-components"

export default Banner

const BannerContainer = styled.div`
   width: 100%;
   height: 300px;
`
const ImgBanner = styled.img`
   background-size: cover;
   background-repeat: no-repeat;
   position: relative;
`
const CardBanner = styled.div`
   position: relative;
   top: 2rem;
   width: 200px;
   padding: 2rem;
   text-align: left;
   margin: 0 auto;
`
const Subtitle = styled.p`
   font-weight: bold;
   font-size: 1rem;
`
const Text = styled.p`
   font-size: 0.9rem;
`

function Banner() {
   return (
      <BannerContainer>
         <ImgBanner src={img_banner} />
         <CardBanner>
            <Subtitle>No fees.</Subtitle>
            <Subtitle>No minimum deposit.</Subtitle>
            <Subtitle>High interest rates.</Subtitle>
            <Text>Open a savings account with Argent Bank today!</Text>
         </CardBanner>
      </BannerContainer>
   )
}
