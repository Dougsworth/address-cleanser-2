from flask import Flask
from flask_cors import CORS, cross_origin
from flask import request
import json
from cleanser import *
import os
from werkzeug.utils import secure_filename
import pandas as pd
import numpy
from flask import jsonify
app=Flask(__name__)
cors = CORS(app)

add1={
    'address1':'20 Bay Farm Road',
    'address2':'Kingston 11',
    'state':'Kingston',
    'city':'Kingston',
    'country':'Jamaica'
}
@app.route('/')
def index():
    return cleanseAddress(add1)

@app.route('/cleanse',methods=['POST'])
def cleanseFromReq():
    file=request.files['file']
    filename = secure_filename(file.filename)
    file_csv=file.seek(0)
    data = pd.read_csv(file) 
    #jsonify(
    return createArrayDicts(data)

   

if __name__=="__main__":
    app.run(debug=True)