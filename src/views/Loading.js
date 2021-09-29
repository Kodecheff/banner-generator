import Loader from "react-loader-spinner";
import styled from "styled-components"

const Wrapper = styled.div`
  margin: auto
`

function Loading() {

  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );

}


export default Loading