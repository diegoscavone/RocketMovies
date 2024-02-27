import { FiStar } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

import { Container, Content } from "./styles";
import { Tag } from "../../components/Tag";

export function Cards({ data, ...rest}){
  return (
    <Container {...rest}>
      <Content>
       <h2>{data.title}</h2>
       <div>
         <AiFillStar/>
         <AiFillStar/>
         <AiFillStar/>
         <AiFillStar/>
         <FiStar/>
       </div>

       <p>{data.paragraph}</p>

       {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
          }
        </footer>
       }
       </Content>
    </Container>
  )
}