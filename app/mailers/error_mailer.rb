require 'sendgrid-ruby'
include SendGrid

class ErrorMailer
    def self.bug_report(subject, body)
        mail = SendGrid::Mail.new
        mail.from = Email.new(email: 'andre.lls@hotmail.com')
        mail.subject = subject
        mail.add_content(Content.new(type: 'text/plain', value: body))
        
        personalization = Personalization.new
        personalization.add_to(Email.new(email: 'andre.llsouza8@gmail.com', name: "Andre"))
        personalization.add_to(Email.new(email: 'andriw.luiz@gmail.com', name: "Andre Souza"))
        mail.add_personalization(personalization)

        sg = SendGrid::API.new(api_key: Figaro.env.SENDGRID_API_KEY)
        sg.client.mail._('send').post(request_body: mail.to_json)
    end
end
