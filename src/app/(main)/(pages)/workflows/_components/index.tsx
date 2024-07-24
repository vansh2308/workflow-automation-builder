
import React from 'react'
import Workflow from './workflow'

type Props = {}

const Workflows = () => {
    return (
        <div className='relative flex flex-col gap-4'>
            <section className='flex flex-col m-2'>
                <Workflow
                    description='Creating a test workflow'
                    id='1334415'
                    name='Automation Workflow'
                    publish={false}
                />
            </section>



        </div>
    )
}

export default Workflows
