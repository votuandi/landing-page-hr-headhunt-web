/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
})

const inputClasses = 'block w-full px-4 py-2 border focus:outline-none'

export default function CareerOpps() {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  const handleSubmit = (values: FormValues, { resetForm }: any) => {
    // Handle submission logic here
    console.log(values)
    resetForm()
  }

  return (
    <div className="w-full h-fit flex flex-col">
      <div className="bg-[url('/image/contact.jpg')] h-fit bg-fixed bg-center bg-no-repeat bg-cover flex justify-center items-center relative mb-[26px]">
        <div className="absolute top-0 left-0 bg-[#00000064] w-full h-full"></div>
        <div className="w-full max-w-[900px] px-5 lg:px-0 flex flex-col py-[100px]">
          <h1 className="text-[40px] text-white drop-shadow-md">CONTACT</h1>
        </div>
      </div>
      <div className="mb-[50px] mt-10 flex justify-center items-center w-full">
        {/* <div className="w-full max-w-[900px px-5 lg:px-0] flex flex-col gap-[14px] text-[#2f2e2e] text-sm text-justify md:grid md:grid-cols-2 md:gap-4">
          <div className="w-full h-fit flex flex-col gap-5">
            <h1 className="text-[33px] text-[#bdbdbd]">Hr Charming Headhunt</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                // Handle submission logic here
                console.log(values)
                resetForm()
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-4">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className={`${inputClasses} ${errors.name && touched.name ? 'border-red-500 text-red-500 bg-red-50' : 'border-black'}`}
                    />
                  </div>
                  <div className="mb-4">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={`${inputClasses} ${errors.email && touched.email ? 'border-red-500 text-red-500 bg-red-50' : 'border-black'}`}
                    />
                  </div>
                  <div className="mb-4">
                    <Field
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className={`${inputClasses} ${errors.subject && touched.subject ? 'border-red-500 text-red-500 bg-red-50' : 'border-black'}`}
                    />
                  </div>
                  <div className="mb-4">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Message"
                      className={`${inputClasses} ${errors.message && touched.message ? 'border-red-500 text-red-500 bg-red-50' : 'border-black'}`}
                    />
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="bg-[#7373d1] text-white px-10 py-2">
                      Send
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div> */}
        <div className="w-full max-w-[900px] px-5 lg:px-0 flex-col justify-start items-start flex gap-3">
          <span className="text-black text-sm">
            <b>Address: </b>
            <br />
            Rm 15, 9 Floor, Shatin Galleria, 18-24 Shan Mei Street Fotan, NT, Hong Kong
          </span>
          <span className="text-black text-sm">
            <b>Email: </b>
            <br />
            <a href="mailto:info@charming-hr.com">info@charming-hr.com</a>
          </span>
          <span className="text-black text-sm">
            <b>Phone number: </b>
            <br />
            +852 3480 8873
          </span>
        </div>
      </div>
    </div>
  )
}
