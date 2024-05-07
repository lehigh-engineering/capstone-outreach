import boto3

def handler(event, context):
    try:
        # Initialize the DynamoDB client
        dynamodb = boto3.resource('dynamodb', region_name='us-east-2')
        
        # Name of your DynamoDB table
        table_name = 'modules'
        
        # Retrieve the DynamoDB table
        table = dynamodb.Table(table_name)
        
        # Get all items from the DynamoDB table
        response = table.scan()
        
        # Extract the items from the response
        items = response.get('Items', [])
        
        # Extract IDs and titles from each module
        modules_info = [{'title': item['title']} for item in items]
        
        # Return the IDs and titles
        return {
            'statusCode': 200,
            'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': modules_info
        }
    except Exception as e:
        # Log the error for debugging purposes
        print(f"An error occurred: {e}")
        
        # Return an error response
        return {
            'statusCode': 500,
            'body': 'Internal Server Error'
        }
