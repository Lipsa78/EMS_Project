package com.ems.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "documents")

public class Document {

    @Id
    @GeneratedValue(strategy =
    GenerationType.IDENTITY)

    @Column(name = "document_id")
    private Long documentId;

    @Column(name = "file_name")
    private String fileName;

    @Column(name = "file_type")
    private String fileType;

    @Column(name = "file_path")
    private String filePath;

    @Column(name = "file_size")
    private Long fileSize;

    @Column(name = "upload_date")
    private LocalDateTime uploadDate;

    @Column(name = "uploaded_by")
    private String uploadedBy;

    @ManyToOne
    @JoinColumn(name = "employee_id")

    private Employee employee;

    // Getters and Setters
}