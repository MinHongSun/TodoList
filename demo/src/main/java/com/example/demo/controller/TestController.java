package com.example.demo.controller;


import com.example.demo.dto.ResponseDTO;
import com.example.demo.dto.TestRequestBodyDTO;

import org.hibernate.mapping.Array;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("test") //리소스
public class TestController {
	/*
	 * @GetMapping("/testGetMapping") public String testController() { return
	 * "Hello World! testGetMapping"; }
	 * 
	 * @GetMapping("/{id}") public String
	 * testControllerWithPathVariavles(@PathVariable(required = false) int id) {
	 * return "Hello World! ID " + id; }
	 * 
	 * @GetMapping("/testRequestParam") public String
	 * testControllerRequestParam(@RequestParam(required = false) int id) { return
	 * "Hello World! ID " + id; }
	 */
	@GetMapping("/testRequestBody")
	public String testControllerRequestBody(@RequestBody TestRequestBodyDTO testRequestBodyDTO) {
		return "Hello World! ID " + testRequestBodyDTO.getId() + "Messge : " + testRequestBodyDTO.getMessage();
	}
	@GetMapping("/testResponseBody")
	public ResponseDTO<String> testControllerResponseBody(){
		List<String> list = new ArrayList<>();
		list.add("Hello World! I'm ResponseDTO");
		ResponseDTO<String> response = ResponseDTO.<String>builder().data(list).build();
		return response;
	
	}
	@GetMapping("/testResponseEntity")
	public ResponseEntity<?> testControllerResponseEntity(){
		List<String> list = new ArrayList<>();
		list.add("Hello  World! I'm ResponseEntity. And you got 400!");
		ResponseDTO<String> response = ResponseDTO.<String>builder().data(list).build();
		//http status 를 400으로 설정
		//return ResponseEntity.badRequest().body(response);
		//http 정상적으로 응답 반환
		return ResponseEntity.badRequest().body(response);
	}
}

