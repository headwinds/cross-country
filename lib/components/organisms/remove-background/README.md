# RemoveBackground Component

A React component that allows users to drag and drop images onto a hit area to remove backgrounds using the Scout AI API. The processed images can be exported as transparent PNGs.

## Features

- 🖱️ **Drag & Drop Interface**: Intuitive drag and drop functionality for image uploads
- 🎯 **Click to Browse**: Alternative file selection method for better accessibility
- 🤖 **AI Background Removal**: Powered by Scout AI for professional results
- 📱 **Responsive Design**: Works seamlessly across all device sizes
- 🔄 **Real-time Progress**: Visual feedback during processing
- 📊 **Before/After Comparison**: Side-by-side view of original and processed images
- 💾 **PNG Export**: Download transparent PNG images
- ✅ **File Validation**: Automatic file type and size validation
- 🚨 **Error Handling**: Comprehensive error handling and user feedback
- 🎨 **Customizable Styling**: Flexible styling options via CSS modules
- 🔗 **Scout Integration**: Seamless integration with Scout backend services

## Installation

The component is part of the Cross Country design system. Ensure you have the required dependencies:

```bash
npm install cross-country
# or
yarn add cross-country
# or
pnpm add cross-country
```

## Usage

### Basic Usage

```tsx
import RemoveBackground from 'cross-country/lib/components/organisms/remove-background';

function MyApp() {
  const [userAccountId, setUserAccountId] = useState('your-user-account-id');

  return (
    <RemoveBackground
      userAccountId={userAccountId}
      onImageProcessed={(url) => console.log('Success:', url)}
      onError={(error) => console.error('Error:', error)}
    />
  );
}
```

### With Scout API Configuration

```tsx
import RemoveBackground from 'cross-country/lib/components/organisms/remove-background';

function MyApp() {
  const [userAccountId, setUserAccountId] = useState('');
  const [scoutApiUrl, setScoutApiUrl] = useState('http://localhost:5000');
  const [processedImage, setProcessedImage] = useState(null);
  const [error, setError] = useState(null);

  const handleImageProcessed = (url: string) => {
    setProcessedImage(url);
    setError(null);
    // Handle successful processing
  };

  const handleError = (error: string) => {
    setError(error);
    // Handle errors
  };

  return (
    <div>
      <input
        type="text"
        value={userAccountId}
        onChange={(e) => setUserAccountId(e.target.value)}
        placeholder="Enter user account ID"
      />
      
      <input
        type="text"
        value={scoutApiUrl}
        onChange={(e) => setScoutApiUrl(e.target.value)}
        placeholder="Scout API URL"
      />
      
      <RemoveBackground
        scoutApiUrl={scoutApiUrl}
        userAccountId={userAccountId}
        onImageProcessed={handleImageProcessed}
        onError={handleError}
      />
      
      {processedImage && (
        <div>
          <h3>Processed Image:</h3>
          <img src={processedImage} alt="Background removed" />
        </div>
      )}
      
      {error && (
        <div style={{ color: 'red' }}>
          Error: {error}
        </div>
      )}
    </div>
  );
}
```

### With Custom Styling

```tsx
import RemoveBackground from 'cross-country/lib/components/organisms/remove-background';
import './custom-styles.css';

function MyApp() {
  return (
    <RemoveBackground
      userAccountId="your-user-account-id"
      className="my-custom-class"
      style={{ 
        maxWidth: '600px',
        margin: '20px auto'
      }}
    />
  );
}
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scoutApiUrl` | `string` | No | `"http://localhost:5000"` | URL of your Scout API server |
| `userAccountId` | `string` | Yes | - | User account ID for authentication |
| `onImageProcessed` | `(url: string) => void` | No | - | Callback when image is successfully processed |
| `onError` | `(error: string) => void` | No | - | Callback when an error occurs |
| `className` | `string` | No | `""` | Additional CSS class names |
| `style` | `React.CSSProperties` | No | `{}` | Additional inline styles |

## Scout API Integration

### Scout Architecture

The component integrates with the Scout microservices architecture:

- **scout** - Main API server (this component connects to)
- **scout-summarize** - AI/ML services including background removal
- **scout-google** - Google Cloud Storage integration
- **scout-satellites** - Additional services

### API Endpoints

The component uses the following Scout API endpoints:

1. **POST /api/images/** - Upload image and get image_id
2. **POST /api/images/remove-background** - Remove background using image_id

### Request Flow

1. **Image Upload**: File is uploaded to Scout API via FormData
2. **Image Processing**: Scout API coordinates with scout-summarize service
3. **Storage**: Processed image is stored in Google Cloud Storage
4. **Response**: Returns GCS URL of processed transparent PNG

### Authentication

The component uses `user_account_id` for authentication and to associate processed images with specific users.

## File Support

### Supported Formats
- **JPG/JPEG**: Joint Photographic Experts Group
- **PNG**: Portable Network Graphics
- **WEBP**: Web Picture format

### File Size Limits
- **Maximum**: 10MB
- **Recommended**: Under 5MB for faster processing

## Styling

The component uses CSS modules for styling. You can customize the appearance by:

1. **Overriding CSS classes**: Use the `className` prop to add custom classes
2. **Inline styles**: Use the `style` prop for component-specific styling
3. **CSS custom properties**: Override CSS variables in your global styles

### Key CSS Classes

- `.RemoveBackground`: Main container
- `.dropZone`: Drag and drop area
- `.dropZone.dragOver`: Active drag state
- `.dropZone.hasImage`: When image is selected
- `.progressBar`: Progress indicator
- `.actions`: Button container
- `.resultContainer`: Results display area

## Error Handling

The component handles various error scenarios:

- **Missing user account ID**: Shows warning message
- **Invalid file type**: Validates image formats
- **File size exceeded**: Checks against 10MB limit
- **API failures**: Handles network and API errors
- **Processing failures**: Manages background removal errors
- **Upload failures**: Handles image upload errors

## Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Required APIs**: File API, Drag and Drop API, Fetch API
- **Canvas Support**: Required for PNG export functionality

## Performance Considerations

- **Image Optimization**: Large images are processed as-is by the API
- **Memory Management**: File objects are properly cleaned up
- **Network Efficiency**: FormData for file uploads
- **Progressive Loading**: Visual feedback during processing

## Accessibility

- **Keyboard Navigation**: Full keyboard support for file selection
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Logical tab order and focus indicators
- **Error Announcements**: Screen reader accessible error messages

## Troubleshooting

### Common Issues

1. **User Account ID Not Working**
   - Verify your user account ID is correct
   - Check if your account has proper permissions
   - Ensure the Scout API is accessible

2. **Images Not Processing**
   - Verify file format is supported (JPG, PNG, WEBP)
   - Check file size is under 10MB
   - Ensure Scout backend services are running
   - Check network connectivity to Scout API

3. **Export Not Working**
   - Check browser supports Canvas API
   - Verify CORS policies allow image loading
   - Ensure processed image URL is accessible

4. **Scout Services Not Responding**
   - Verify all Scout microservices are running
   - Check scout-summarize service for background removal
   - Ensure scout-google service for storage is accessible

### Debug Mode

Enable console logging to debug issues:

```tsx
<RemoveBackground
  userAccountId={userAccountId}
  onImageProcessed={(url) => console.log('Processed:', url)}
  onError={(error) => console.error('Error:', error)}
/>
```

### Scout Service Status

Ensure all required Scout services are running:

```bash
# Check main Scout API
curl http://localhost:5000/health

# Check scout-summarize service
curl http://localhost:5003/health

# Check scout-google service
curl http://localhost:5002/health
```

## Examples

See the `remove-background.example.tsx` file for a complete working example with:
- Scout API configuration
- User account ID setup
- Error handling
- Success callbacks
- Custom styling
- Usage documentation

## Contributing

To contribute to this component:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see the main project license for details.

## Support

For issues and questions:
- Check the troubleshooting section above
- Review the example file
- Open an issue in the project repository
- Contact the Cross Country team
- Check Scout backend service status
