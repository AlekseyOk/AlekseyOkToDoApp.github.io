import React, { Component } from 'react';
import { Popover, Button, OverlayTrigger,InputGroup, FormControl} from 'react-bootstrap';
  
  class Edit extends Component {
      editTaskFunc = () => {  
          const { id, editTaskTitle, editTask } = this.props
          document.querySelector(`.textTitle${id}`) && editTaskTitle(id, document.querySelector(`.textTitle${id}`).value);
          document.querySelector(`.text${id}`) && editTask(id, document.querySelector(`.text${id}`).value);
      }
      focusAfterEnterOnTitle = ({ key }) => {
        if (key === 'Enter') {
          const { id, editTaskTitle } = this.props
          document.querySelector(`.textTitle${id}`) && editTaskTitle(id, document.querySelector(`.textTitle${id}`).value);
          document.querySelector(`.text${id}`).focus();
        }
      }
      onKeyPress = ({ key }) => {
        if (key === 'Enter') {
          this.editTaskFunc();
        }
      }
    render() {
      const { id } = this.props
      const popover = (
       
        <Popover id='popover-basic'>
          <FormControl
            placeholder='task title'
            aria-label='Username'
            aria-describedby='basic-addon1'
            type='text'
            defaultValue = {this.props.textTitle}
            className = {`textTitle${id}`}
          />
        <Popover.Content>
          <InputGroup>
              <FormControl as='textarea' aria-label='With textarea'
                type='text'
                placeholder='task'
                defaultValue = {this.props.text}
                className = {`text${id}`}
                 />
          </InputGroup>
          </Popover.Content>
        </Popover>
      );

        return (
            <OverlayTrigger className="wewe" trigger="click" placement="right" overlay={popover}>
                <Button size="sm"  onClick = {this.editTaskFunc} variant="outline-secondary">edit</Button>
            </OverlayTrigger>
        )
      }
  }

  export default Edit;
