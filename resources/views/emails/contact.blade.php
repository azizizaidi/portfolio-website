<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .header {
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
        }
        .header h2 {
            color: #2563eb;
            margin: 0 0 10px;
        }
        .header p {
            color: #666;
            margin: 0;
            font-size: 14px;
        }
        .content {
            padding: 10px 0;
        }
        .field {
            margin-bottom: 20px;
        }
        .field-label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
            color: #555;
        }
        .field-value {
            background-color: #f5f7fb;
            padding: 10px;
            border-radius: 3px;
            border-left: 3px solid #2563eb;
        }
        .message-field .field-value {
            min-height: 100px;
            white-space: pre-wrap;
        }
        .footer {
            margin-top: 30px;
            padding-top: 15px;
            border-top: 1px solid #eee;
            text-align: center;
            font-size: 12px;
            color: #999;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Form Submission</h2>
            <p>Received on {{ date('F j, Y \a\t g:i a') }}</p>
        </div>
        
        <div class="content">
            <div class="field">
                <span class="field-label">Name:</span>
                <div class="field-value">{{ $data['name'] }}</div>
            </div>
            
            <div class="field">
                <span class="field-label">Email:</span>
                <div class="field-value">{{ $data['email'] }}</div>
            </div>
            
            <div class="field">
                <span class="field-label">Subject:</span>
                <div class="field-value">{{ $data['subject'] }}</div>
            </div>
            
            <div class="field message-field">
                <span class="field-label">Message:</span>
                <div class="field-value">{{ $data['message'] }}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>This email was sent from the contact form on azizizaidi.dev</p>
            <p>© {{ date('Y') }} Muhammad Azizi bin Zaidi. All rights reserved.</p>
        </div>
    </div>
</body>
</html>