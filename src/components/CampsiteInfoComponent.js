import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,BreadcrumbItem, Breadcrumb, Button, Modal, ModalHeader, 
    ModalBody, Form, FormGroup, Input,Label, Col, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CampsiteInfo extends Component{
    renderCampsite(campsite){
     return(
         <div className="col-md-5 m-1">
               <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
         </div>
     )
    }
    renderComments(comments){
        if(comments){
            return(
                <div className="col-md-5 m-1" >
                    <h4>Comments</h4>
                    {comments.map(comment => 
                        <div> 
                            <p>{comment.text}</p><br/>
                            <p>{comment.author}</p>
                            <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>)}
                    <CommentForm />
                </div>
               
            )
        }return <div></div>
    }

    
    render(){        
        if(this.props.campsite){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{this.props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{this.props.campsite.name}</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row" >   
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.comments)}
                    </div>
                </div>
            );
            
            }
            return <div />    
    }
    
}

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            rating:'',
            author:'',
            text:'',
            isModalOpen: false,
            touched:{
                author:false
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this); 
    };
    
    handleSubmit(values){
        console.log('Current State is' + JSON.stringify(values));
        alert('Current state is ' + JSON.stringify(values));
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render(){
        return (

            <React.Fragment>
                <div className="container">
                    <Button outline onClick={this.toggleModal} className="fa fa-pencil">Submit Comment</Button>
                    
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                        <div className="col-md-10 form-group">
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col >
                                        <Control.select
                                        model=".rating"
                                        name="rating"
                                        className="form-control"
                                        defaultValue="1"
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                               
                                        </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                    <Label htmlFor="author" >Your Name</Label>
                                    <Col>
                                        <Control.text model=".author" id="author" name="author"
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />

            
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                    <Label htmlFor="comment" >Comment</Label>
                                    <Col>
                                        <Control.textarea model=".text" id="text" name="text"
                                            row="6"
                                            className="form-control"
                                        />
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                                
                            
                            </LocalForm>
                            </div>      
                            
                        </ModalBody>
                   </Modal>
                </div>
            </React.Fragment>

        );
        
    }
}

export default CampsiteInfo;