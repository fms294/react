import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,BreadcrumbItem, Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';

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
                            <p>comment.text</p><br/>
                            <p>comment.author</p>
                            <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>)}
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


export default CampsiteInfo;