package com.playground.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {
	@Autowired
	private JavaMailSender emailSender;

	public String sendMessage(String from, String to, String subject, String body) throws Exception{

		SimpleMailMessage message = new SimpleMailMessage();

		message.setFrom(from);
		message.setTo(to);
		message.setSubject(subject);
		message.setText(body);


		emailSender.send(message);

		return "sent ok";
	}
}
