#!/usr/bin/env python
# coding: utf-8

# In[182]:


import pandas as pd
import turicreate as tc


# In[183]:


data=pd.read_csv('https://raw.githubusercontent.com/amar251/data/master/data.csv')
print(data)


# In[184]:


data = data.reset_index()
unique_subject = list(data['subject'].unique())
mlist = [int(x) for x in range(len(unique_subject))]
newvalue = dict(zip(unique_subject, mlist))
data['subject'] = data['subject'].map(newvalue)

print(data)


# In[185]:


features = list(data.columns[4:])
data = data.drop(columns='rep')
data=data.drop(columns='sessionIndex')
data=data.drop(columns='index')


# In[186]:


print(data)
print(features)


# In[187]:


len(features)


# In[188]:


sf = tc.SFrame(data=data)


# In[189]:


train_data,test_data=sf.random_split(.80,seed=0)
print(test_data)


# In[196]:


model=tc.boosted_trees_classifier.create(train_data, target='subject', features=None, max_iterations=400, validation_set='auto', class_weights=None, max_depth=1, step_size=0.3, min_loss_reduction=0.0, min_child_weight=0.1, row_subsample=1.0, column_subsample=1.0, verbose=True, random_seed=None, metric='auto')


# In[197]:


predictions = model.classify(test_data)
print(predictions)


# In[198]:


results = model.evaluate(test_data)
print(results)


# In[199]:


predictions.show()


# In[ ]:




