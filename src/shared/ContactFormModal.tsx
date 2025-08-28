import { useState } from 'react';
import emailjs from 'emailjs-com';

type Props = {
  children: React.ReactNode;
};

const ContactFormModal = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    business: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID', // from EmailJS
        'YOUR_TEMPLATE_ID', // from EmailJS
        formData,
        'YOUR_PUBLIC_KEY' // from EmailJS
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            business: '',
            message: '',
          });
          setIsOpen(false);
        },
        (err) => {
          console.error('Failed to send message', err);
          alert('Something went wrong!');
        }
      );
  };

  return (
    <div>
      {/* Button to Open Modal */}
      <button
        onClick={() => setIsOpen(true)}
        className='rounded-full bg-primary-600 px-12 py-2 hover:bg-red-800 text-white'>
        {children}
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className='fixed inset-0 bg-black/70 flex justify-center items-center z-50'>
          <div className='bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative'>
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-3 right-3 text-gray-600 hover:text-gray-900'>
              ✕
            </button>

            <h2 className='text-xl font-semibold text-primary-700 mb-4'>
              Please Fill Up the form
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <input
                  type='text'
                  name='firstname'
                  placeholder='First Name'
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  className='w-full border rounded-lg p-2'
                />
                <input
                  type='text'
                  name='lastname'
                  placeholder='Last Name'
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className='w-full border rounded-lg p-2'
                />
              </div>

              <input
                type='tel'
                name='phone'
                placeholder='Phone Number'
                value={formData.phone}
                onChange={handleChange}
                required
                className='w-full border rounded-lg p-2'
              />

              <input
                type='email'
                name='email'
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full border rounded-lg p-2'
              />

              <input
                type='text'
                name='business'
                placeholder='Business Name'
                value={formData.business}
                onChange={handleChange}
                className='w-full border rounded-lg p-2'
              />

              <textarea
                name='message'
                placeholder='Tell us more...'
                value={formData.message}
                onChange={handleChange}
                required
                className='w-full border rounded-lg p-2 h-28'
              />

              <button
                type='submit'
                className='rounded-full bg-primary-600 px-12 py-2 hover:bg-red-800 text-white w-full'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactFormModal;
