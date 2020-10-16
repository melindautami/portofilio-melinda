import React from 'react';

import Card from '../components/Card';

import deeptalk from '../assets/images/Dee.png';
import clogo from '../assets/images/clogo.png';
import womenProud from '../assets/images/womenProud.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'DeepTalk',
                    subTitle: 'Psychological First Aid Giver Platform',
                    imgSrc: deeptalk,
                    selected: false
                },
                {
                    id: 1,
                    title: 'NotoAturan',
                    subTitle: 'Website Bantuan Hukum',
                    imgSrc: clogo,
                    selected: false
                },
                {
                    id: 2,
                    title: 'women Proud',
                    subTitle: 'Women empowerment Website',
                    imgSrc: womenProud,
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;