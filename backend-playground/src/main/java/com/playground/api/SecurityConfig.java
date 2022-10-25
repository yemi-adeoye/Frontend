package com.playground.api;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
		
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		 auth.inMemoryAuthentication()
		 .passwordEncoder(getEncoder())
		 .withUser("harry").password(getEncoder().encode("potter")).authorities("EMPLOYEE")
		 .and()
		 .withUser("albus").password(getEncoder().encode("albus@123")).authorities("MANAGER");
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
	 
		 http.authorizeRequests()
		 	.antMatchers(HttpMethod.POST, "/api/employee/add").permitAll()
		 	.antMatchers(HttpMethod.GET, "/api/employee/all").hasAuthority("MANAGER")
		 	.anyRequest().permitAll()
		 	.and().httpBasic()
		 	.and().csrf().disable();
	}
	
	
	@Bean
	public PasswordEncoder getEncoder(){
		 
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder; 
	}
}
