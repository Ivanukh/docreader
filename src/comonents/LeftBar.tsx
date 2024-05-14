import { ListGroup } from 'react-bootstrap';

type SectionItemProps = {
  title: string,
  path: string,
  description?: string

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



function SectionItem(props: SectionItemProps) {
  return <ListGroup.Item as='li' action>{props.title}{props.description && <div className='text gray small'>{props.description}</div>}
  </ListGroup.Item>
}

function Section(props: SectionProps) {
  return <ListGroup key={props.path} style={{ margin: 10 }} as='ul'>
    <ListGroup.Item as='li' action className='text-center' variant='dark'>{props.title}</ListGroup.Item>
    {props.items.map((i) => <SectionItem key={`${props.path}_${i.path}`} {...i} />)}
  </ListGroup>

}

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