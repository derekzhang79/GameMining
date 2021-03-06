#!/usr/bin/env python
 
"""
Simple example showing node and relationship creation plus
execution of Cypher queries
"""
 
from __future__ import print_function
 
# Import Neo4j modules
from py2neo import neo4j, cypher
 
# Attach to the graph db instance
graph_db = neo4j.GraphDatabaseService("http://localhost:7474/db/data/")
 
# Build a Cypher query

query = "START a=node(*) MATCH a-[c]->b RETURN a,b,c"
 
# Define a row handler...
def print_row(row):
    a, b, c = row
    print(a["name"])
 
# ...and execute the query
cypher.execute(graph_db, query, {}, row_handler=print_row)

