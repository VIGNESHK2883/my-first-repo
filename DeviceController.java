package com.example.devicemanager.controller;

import com.example.devicemanager.model.Device;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5000")  // Your React app's port
@RequestMapping("/api/devices")
public class DeviceController {

    private final List<Device> deviceList = new ArrayList<>();

    @PostMapping("/add")
    public String addDevice(@RequestBody Device device) {
        deviceList.add(device);
        return "Device added successfully!";
    }

    @GetMapping("/all")
    public List<Device> getAllDevices() {
        return deviceList;
    }

    @PostMapping("/login")
    public String login(@RequestBody Device loginDevice) {
        for (Device device : deviceList) {
            if (device.getIpAddress().equals(loginDevice.getIpAddress())) {
                return "Login successful!";
            }
        }
        return "Login failed!";
    }
}