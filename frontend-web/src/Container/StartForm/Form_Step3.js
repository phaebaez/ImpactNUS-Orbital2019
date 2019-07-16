import React from 'react';
import { Button, TextArea, Form, Dropdown, Input } from 'semantic-ui-react'
import tagOptions from './tagOptions';
import { Formik } from "formik";
import * as yup from "yup";
import TextEditor from '../../Components/TextEditor/TextEditor';


const Form_Step3 = ({ navButton, dropdownChange, currState }) => (
    <Formik
        initialValues={{
            description: currState.description,
            imageURL: currState.imageURL,
        }}

        onSubmit={(values) => {
            navButton(4, values);
        }}

        validationSchema={yup.object().shape({
            imageURL: yup.string().url("This is not a url!"),
        })}

        render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
            return (
                <Form size='huge'>
                    <Form.Field>
                        <h1>Add a photo (Optional but highly recommended)</h1>
                        {touched.imageURL && (
                            <div className='i mv3 red'> {errors.imageURL}</div>
                        )}
                        <Input
                            type='text'
                            placeholder="Link to an image hosting site"
                            name="imageURL"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.imageURL}
                        />
                    </Form.Field>

                    <Form.Field>
                        <h1>Input relevant tags</h1>
                        <Dropdown
                            clearable fluid multiple search selection
                            value={currState.tags}
                            options={tagOptions}
                            onChange={dropdownChange.bind(this)}
                            placeholder='Insert tags' />
                    </Form.Field>

                    <Form.Field >
                        <h1>Provide a detailed description of your {currState.type}</h1>
                        <TextEditor
                            placeholder="Tell your story..."
                            name="description"
                            onChange={e => setFieldValue('description', e)}
                            value={values.description}
                        />
                    </Form.Field>

                    <Button.Group>
                        <Button
                            labelPosition='left'
                            icon='left chevron'
                            onClick={() => navButton(2, values)}
                            content='Previous' />
                        <Button
                            labelPosition='right' icon='right chevron'
                            onClick={handleSubmit}
                            content='Next'
                            type='submit' />
                    </Button.Group>
                </Form>
            );
        }}
    />
);

export default Form_Step3;