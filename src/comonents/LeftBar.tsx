import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

type SectionItemProps = {
  title: string,
  path: string,
  description?: string
  sectionPath?: string

}

type SectionProps = {
  title: string,
  path: string,
  items: SectionItemProps[]
}


type LeftBarProps = {
  sections: SectionProps[],
  filter?: string,
}



const SectionItem = (props: SectionItemProps) =>
  <ListGroup.Item as={NavLink} to={props.sectionPath + '/' + props.path} end>
    {props.title}
    {props.description && <div className='text gray small'>{props.description}</div>}
  </ListGroup.Item>

const Section = (props: SectionProps) =>
  <ListGroup key={props.path} style={{ margin: 10 }} >
    <ListGroup.Item className='text-center' as={NavLink} end to={props.path}>
      <h6>
        {props.title}
      </h6>
    </ListGroup.Item>
    {props.items.map((i) => <SectionItem key={`${props.path}_${i.path}`} {...i} sectionPath={props.path} />)}
  </ListGroup>


function LeftBar(props: LeftBarProps) {
  return <>
    {props.sections.map(section => <Section key={section.path} {...section} />)}
  </>

}



export {
  LeftBar,
};

export type {
  LeftBarProps,
  SectionProps
}