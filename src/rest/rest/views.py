from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json, logging, os
from pymongo import MongoClient

mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
db = MongoClient(mongo_uri)['test_db']

class TodoListView(APIView):

    def get(self, request):
        try:
            collection_name = 'todo_list'
            # db.todo_list.drop()
            if collection_name not in db.list_collection_names():
                return Response({'message': 'No todo items found'}, status=status.HTTP_200_OK)
            
            document = db[collection_name].find_one({})
            
            if not document or 'todos' not in document or len(document['todos']) == 0:
                return Response({'message': 'No todo items found'}, status=status.HTTP_200_OK)
            
            document['_id'] = str(document['_id'])
            
            return Response(document['todos'], status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
       
    def post(self, request):
        try:
            todo_data = request.data.get('todo')
            
            collection_name = 'todo_list'
            
            if collection_name not in db.list_collection_names():
                db.create_collection(collection_name)
            
            document = db[collection_name].find_one({})
            if not document:
                db[collection_name].insert_one({'todos': []})
            
            db[collection_name].update_one({}, {'$push': {'todos': todo_data}})
            
            return Response({'message': 'Todo item created successfully'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

