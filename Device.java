package com.example.devicemanager.model;

public class Device {
    private String deviceName;
    private String ipAddress;
    private String port;
    private String deviceType;

    // Getters and Setters
    public String getDeviceName() { return deviceName; }
    public void setDeviceName(String deviceName) { this.deviceName = deviceName; }

    public String getIpAddress() { return ipAddress; }
    public void setIpAddress(String ipAddress) { this.ipAddress = ipAddress; }

    public String getPort() { return port; }
    public void setPort(String port) { this.port = port; }

    public String getDeviceType() { return deviceType; }
    public void setDeviceType(String deviceType) { this.deviceType = deviceType; }
}