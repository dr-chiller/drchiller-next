const ContactUsMap = () => {
    return (
        <div className="w-full h-96 overflow-hidden shadow">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d185.69043049580569!2d55.474328!3d25.381956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f58667d25286b%3A0x950fd127e21e0a5f!2sChiller%20Technical%20Services%20LLC!5e1!3m2!1sen!2sus!4v1756282696652!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

    )
}

export default ContactUsMap;