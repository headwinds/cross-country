import React from 'react';
import RadioGroup from '../';
import { Column, Paragraph, Link, Headline } from '../../../';
import { useForm } from "react-hook-form";

// you could use a static file to store your questions or fetch them from an API
const formData = {
    title: 'Radio Group React Hook Form Story',
    questions: [
        {
            id: '1',
            text: 'In Norse mythology, who was the god of the sea?',
            options: [
                { id: '1', text: 'Thor' },
                { id: '2', text: 'Odin' },
                { id: '3', text: 'Loki' },
                { id: '4', text: 'Heimdall' },
                { id: '5', text: 'Njord' },
            ],
            answer: '5',
        },
        {
            id: '2',
            text: 'What god did <Link url="https://vikings.fandom.com/wiki/Ragnar">Ragnar Lothbrok</Link> claim to be his father?',
            options: [
                { id: '1', text: 'Thor' },
                { id: '2', text: 'Odin' },
                { id: '3', text: 'Loki' },
                { id: '4', text: 'Heimdall' },
                { id: '5', text: 'Njord' },
            ],
            answer: '2',
        }]
}


export const RadioGroupReactHookFormStory = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it


    const [state, setState] = React.useState({
        selectedSeaGod: '1',
        selectedRagnarGod: '1',
    });
    const onSeaGodChange = (id) => {
        console.log('onSeaGodChange');
        setState({...state, selectedSeaGod: id});
    };



    const onRagnarChange = (id) => {
        console.log('onRagnarChange');
        setState({...state, selectedRagnarGod: id});
    };

    // who is the norse god of the sea?
    const { selectedSeaGod, selectedRagnarGod } = state;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Headline>{formData.title}</Headline>
        {formData.questions.map((question) => (
        <RadioGroup key={question.id} question={question} register={register} />
      ))}
        <input type="submit" />
    </form>
  );
};

export default RadioGroupReactHookFormStory;