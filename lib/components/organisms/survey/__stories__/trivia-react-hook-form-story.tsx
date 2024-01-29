import * as React from 'react';
import ReactHookForm from '../';
import { Column, Headline } from '../../../';

const ReactHookFormStory = () => {

    const fields = [{
            name: "s1q1",
            question: "Who did Ragnar Lothbrok claim to be his father?",
            placeholder: "Enter your answer",
            required: true,
            questionOptions: ["Thor", "Odin", "Loki", "Heimdall", "Njord"],
            questionType: "multipleChoice",
            errorMessage: "An answer is required",
            order: 1,
            userId: "1",
            section: "Season 1",
        }
    ];

    const onFormSubmit = () => {
        console.log("ReactHookFormStory onFormSubmit");
    }


  return (<Column>
            <Headline>Vikings Trivia</Headline>
            <ReactHookForm fields={fields} onFormSubmit={onFormSubmit} />
        </Column>);
};

export default ReactHookFormStory;