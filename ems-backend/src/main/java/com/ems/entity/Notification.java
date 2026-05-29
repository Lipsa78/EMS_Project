package com.ems.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "notifications")

public class Notification {

    @Id
    @GeneratedValue(strategy =
    GenerationType.IDENTITY)

    @Column(name = "notification_id")
    private Long notificationId;

    private String title;

    private String message;

    private String type;

    @Column(name = "is_read")
    private Boolean isRead;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "employee_id")

    private Employee employee;

    // Getters and Setters
}